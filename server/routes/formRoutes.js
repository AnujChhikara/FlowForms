const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

/**
 * @swagger
 * tags:
 *   - name: Forms
 *     description: API for managing forms
 */

/**
 * @swagger
 * /api/forms:
 *   post:
 *     summary: Create a new form
 *     tags: [Forms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the form
 *               description:
 *                 type: string
 *                 description: The description of the form
 *               projectId:
 *                 type: integer
 *                 description: The ID of the associated project
 *               userId:
 *                 type: integer
 *                 description: The ID of the user who created the form
 *     responses:
 *       201:
 *         description: Form created successfully
 *       400:
 *         description: This project already has a form associated with it
 *       500:
 *         description: Server error
 */
router.post('/', formController.createForm);

/**
 * @swagger
 * /api/forms:
 *   get:
 *     summary: Get all forms
 *     tags: [Forms]
 *     responses:
 *       200:
 *         description: List of all forms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   project:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                   user:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *       500:
 *         description: Server error
 */
router.get('/', formController.getAllForms);


/**
 * @swagger
 * /api/forms/{id}:
 *   get:
 *     summary: Get a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the form
 *     responses:
 *       200:
 *         description: Form data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 project:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *       404:
 *         description: Form not found
 *       500:
 *         description: Server error
 */
router.get('/:id', formController.getFormById);

/**
 * @swagger
 * /api/forms/{id}:
 *   put:
 *     summary: Update a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *         description: The ID of the form to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the form
 *               description:
 *                 type: string
 *                 description: The updated description of the form
 *     responses:
 *       200:
 *         description: Form updated successfully
 *       404:
 *         description: Form not found
 *       500:
 *         description: Server error
 */
router.put('/:id', formController.updateForm);

/**
 * @swagger
 * /api/forms/{id}:
 *   delete:
 *     summary: Delete a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the form to delete
 *     responses:
 *       200:
 *         description: Form deleted successfully
 *       404:
 *         description: Form not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', formController.deleteForm);

module.exports = router;
