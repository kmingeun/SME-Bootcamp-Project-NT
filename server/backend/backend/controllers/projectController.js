const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = require('../config/database');

exports.getAllPosts = (req, res) => {
    const query = 'SELECT * FROM projects ORDER BY projectId DESC';
    db.query(query, (err, posts) => {
        if (err) {
            console.error('Error fetching posts:', err);
            return res.status(500).json({ error: 'An error occurred while fetching data' });
        }
        res.json({ posts });
    });
};

exports.createProjects = async (req, res) => {
    try {
        const leaderEmail = 'abcd@naver.com';
        const projectName = req.body.Name; //완료  
        const selectedField = req.body.selectedField;   //프로젝트 분야
        const selectedArea = req.body.selectedArea; //완료
        const description = req.body.description; //완료
        const techs = req.body.techs; //기술스택
        const startDate = req.body.startDate; //완료
        const endDate = req.body.endDate; //완료
        const recruit = req.body.recruit;
        const projectId = await insertProject(projectName, selectedField, selectedArea, description, startDate, endDate, leaderEmail, techs);

        for (let i = 0; i < recruit.length - 1; i++) {
            const { subField, count } = recruit[i];
            await insertRecruitment(subField, count, projectId);
        }
        res.status(200).json({ message: '프로젝트 및 모집 현황이 성공적으로 등록되었습니다.' });
    } catch (error) {
        console.error('Error creating project and recruitment:', error);
        res.status(500).json({ message: 'Failed to create project and recruitment' });
    }
};

async function insertProject(projectName, field, area, description, startDate, endDate, leaderEmail, techs) {
    return new Promise((resolve, reject) => {
        const insertProjectQuery = 'INSERT INTO Projects (ProjectName, Field, Area, Description, StartDate, EndDate, Leader, Tech) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const projectValues = [projectName, field, area, description, startDate, endDate, leaderEmail, techs];
        db.query(insertProjectQuery, projectValues, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    });
}

async function insertRecruitment(subField, numOfRole, projectId) {
    return new Promise((resolve, reject) => {
        const insertRecruitmentQuery = 'INSERT INTO Recruitment (SubField, NumOfRole, ProjectId) VALUES (?, ?, ?)';
        const recruitmentValues = [subField, numOfRole, projectId];
        db.query(insertRecruitmentQuery, recruitmentValues, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

exports.recruitPage = async (req, res) => {
    const projectId = req.query.id;
    try {
        db.query(`
        SELECT p.ProjectName, p.FieldId, f.Field, p.Area, p.Description, p.StartDate, p.EndDate
        FROM Projects AS p
        JOIN Fields AS f ON p.FieldId = f.FieldId
        WHERE p.ProjectId = ?;
    `, [projectId], (err, result) => {
            console.log(result);
            if (err) {
                console.error('Error fetching project data:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (result.length === 0) {
                return res.status(404).json({ error: 'Project not found' });
            }

            const { ProjectName, Field, Area, Description, StartDate, EndDate } = result[0];

            // Send JSON response
            res.json({
                projectId,
                ProjectName,
                Field,
                Area,
                Description,
                StartDate,
                EndDate,
            });
        });
    } catch (error) {
        console.error('Error fetching recruit page data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.startProject = async (req, res) => {
    const projectId = req.params.projectId;

    // 프로젝트 시작 로직 수행

    try {
        // 프로젝트 정보 업데이트 (예: 상태를 "ongoing"으로 변경)
        const updateProjectQuery = 'UPDATE Projects SET Status = "ongoing" WHERE ProjectId = ?';
        await db.query(updateProjectQuery, [projectId]);

        // recruitment 정보 삭제
        const deleteRecruitmentQuery = 'DELETE FROM Recruitments WHERE ProjectId = ?';
        await db.query(deleteRecruitmentQuery, [projectId]);

        // "waiting" 상태의 멤버 제거
        const deleteWaitingMembersQuery = 'DELETE FROM Members WHERE ProjectId = ? AND Status = "waiting"';
        await db.query(deleteWaitingMembersQuery, [projectId]);

        return res.status(200).json({ message: 'Project started successfully.' });
    } catch (error) {
        console.error('Error starting project:', error);
        return res.status(500).json({ message: 'An error occurred while starting the project.' });
    }
};

