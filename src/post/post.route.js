const express = require("express");
const tokenVerification = require("../middleware/token.verification");
const postRouter = express.Router();

const postController = require("./post.controller");

// API - Get all post by writer
/**
 * @swagger
 * /posts:
 *  get:
 *      tags:
 *          - post
 *      summary: API get all post
 *      description: get all post (default -> all posts by all writers)
 *      parameters:
 *          -   name: writer
 *              in: query
 *              required: false
 *              description: Get all posts by Writer (if empty, default get all posts by all writer)
 *              schema:
 *                  type: integer
 *          -   name: sort
 *              in: query
 *              require: false
 *              description: order by ASC or DESC - (if empty, default value is ASC)
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: post found
 *          '404':
 *              description: posts not found
 */
postRouter.get("/posts", postController.getAllPosts);

// API - Create post
/**
 * @swagger
 * /posts:
 *  post:
 *      security:
 *          -   bearerAuth: []
 *      tags:
 *          -   post
 *      summary: API create post
 *      description: This can only be done by the logged in user.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                              example: title post pertama
 *                          image:
 *                              type: string
 *                              example: http://urlimagepertama.kom
 *                          body:
 *                              type: string
 *                              example: ini adalah isi dari post pertama
 *      responses:
 *          '200':
 *              description: Post successfully created
 *          '400':
 *              description: Failed to create a post!
 *          '401':
 *              description: Unauthorized
 */
postRouter.post("/posts", tokenVerification, postController.createPost);

// API - Detail Post/get single post
/**
 * @swagger
 * /posts/{postId}:
 *  get:
 *      tags:
 *          -   post
 *      summary: API detail post
 *      description:
 *      parameters:
 *          -   name: postId
 *              in: path
 *              required: true
 *              description: postId to display (get single post)
 *              schema:
 *                  type: integer
 *      responses:
 *          '200':
 *              description: Post found
 *          '400':
 *              description: Post not found
 */
postRouter.get("/posts/:postId", postController.postDetail);

// API - Edit post (Update)
/**
 * @swagger
 * /posts/{postId}:
 *  put:
 *      security:
 *          -   bearerAuth: []
 *      tags:
 *          -   post
 *      summary: API edit post
 *      description: This can only be done by the writer this post.
 *      parameters:
 *          -   name: postId
 *              in: path
 *              required: true
 *              description: postId that need to be updated
 *              schema:
 *                  type: integer
 *      requestBody:
 *          description:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                              example: title post
 *                          image:
 *                              type: string
 *                              example: http://imageurlpost.com
 *                          body:
 *                              type: string
 *                              example: this body for this post, feel free for tour imagination
 *      responses:
 *          '200':
 *              description: Post has modified
 *          '401':
 *              description: You don't have access to this action
 */
postRouter.put("/posts/:postId", tokenVerification, postController.editPost);

// API - Delete post ! //TODO: Up coming

module.exports = postRouter;
