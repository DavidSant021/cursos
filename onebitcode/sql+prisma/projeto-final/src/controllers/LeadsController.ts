import { Handler } from "express";
import { prisma } from "../database";
import { CreateLeadRequestSchema } from "./schemas/LeadsRequestSchema";
import { HttpError } from "../errors/HttpError";

export class LeadsController {
    index: Handler = async (req, res) => {
        try {
            const leads = await prisma.lead.findMany()
            res.json(leads)
        } catch (error) {

        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateLeadRequestSchema.parse(req.body)
            const newLead = await prisma.lead.create({
                data: body
            })
            res.status(201).json(newLead)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const lead = await prisma.lead.findUnique({
                where: { id: Number(req.params.id) },
                include: {
                    groups: true,
                    campaign: true
                }
            })

            if (!lead) throw new HttpError(404, "Lead não encontrado.")

            res.json(lead)
        } catch (error) {
            next(error)
        }
    }
}