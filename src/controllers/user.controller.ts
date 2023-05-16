import type { Request, Response } from 'express';
import { getManager, getRepository } from 'typeorm';
import { User } from '../entities/User';
import logger from '../middleware/logger';


export const createUser = async (req: Request, res: Response) => {
  try {
    const { users } = req.body;
    const userRepository = getRepository(User);
    const createdUsers = userRepository.create(users);
    const savedUsers = await userRepository.save(createdUsers);

    res.status(201).json(savedUsers);
  } catch (error) {
    logger.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getAllUsers = async(_req: Request, res: Response) => {
    const entityManager = getManager();
  
    try {
      const fetchedUsers = await entityManager.transaction(async (transactionManager) => {
        const users = await transactionManager.find(User, { where: { fetched: false } });
        if (users.length > 0) {
          const userIDs = users.map(user => user.id);
          await transactionManager.update(User, userIDs, { fetched: true });
        }
        return users;
      });
  
      res.status(200).json({fetchedUsers})
    } catch (error) {
      logger.error("Error getting users:", error);
      res.status(500).json({ error: "An error occurred while fetching users" });
    }
  }
