import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRUD API",
      description: "API documentation for CRUD application",
      version: "1.0.0",
    },
    servers: [
      {
        url: process.env.API_URL,
        description: "Development server",
      },
    ],
    tags: [
      {
        name: "Users",
        description: "User management endpoints",
      },
      {
        name: "Projects",
        description: "Project management endpoints",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "User name",
            },
            email: {
              type: "string",
              description: "User email",
            },
            password: {
              type: "string",
              description: "User password",
            },
            phone: {
              type: "string",
              description: "User phone",
            },
            dayOfBirth: {
              type: "string",
              description: "User day of birth",
            },
          },
        },
        Project: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Project name",
            },
            description: {
              type: "string",
              description: "Project description",
            },
            startDate: {
              type: "string",
              format: "date",
              description: "Project start date",
            },
            status: {
              type: "string",
              enum: ["pending", "in-progress", "completed"],
              description: "Project status",
            },
            owner: {
              type: "string",
              description: "User ID of project owner",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
