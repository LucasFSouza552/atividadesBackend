import { Request, Response } from "express";
import { User } from "../models/Users";
import { getAll, getById, add, remove, update } from "../services/UserService";

export function listUser(req: Request, res: Response): void {

    if (req.query.name) {
        const { name } = req.query;
        const list = getAll().filter(user => user.name.toLowerCase().includes((name as string).toLowerCase()));
        res.status(200).json(list);
        return;
    }

    const list = getAll();
    res.status(200).json(list);
}

export function getUser(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const user = getById(id);

    if (!user) {
        res.status(404).json({ error: "User not found" });
    } else {
        res.status(200).json(user);
    }
}

export function createUser(req: Request, res: Response): void {
    const { id, name, age } = req.body;

    if (!id || !name || !age) {
        res.status(400).json({ error: "Some fields are missing in the request (id, name, age)." });
    } else {
        const newUser: User = { id, name, age };
        add(newUser);
        res.status(201).json(newUser);
    }
}

export function removeUser(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const success = remove(id);

    if (!success) {
        res.status(404).json({ error: "User not found" });
    } else {
        res.status(200).json({ message: "User removed successfully." });
    }
}

export function updateUser(req: Request, res: Response): void {
    const id = parseInt(req.params.id);

    const user = getById(id);

    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    const { name, age } = req.body;

    if (!name && !age) {
        res.status(400).json({ error: "Some fields are missing in the request (name, age)." });
        return;
    }

    const Updated = update(id, { ...user, name, age });

    if (!Updated) {
        res.status(500).json({ error: "An error occurred while updating the user." });
        return;
    }

    res.status(200).json(Updated);


}