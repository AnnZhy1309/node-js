import pgPromise from "pg-promise";
import {Request, Response} from 'express';


const db = pgPromise()("https://github.com/vitaly-t/pg-promise");
const setupDb = async ()=>{
    await db.none(`
    DROP TABLE IF EXISTS planets;
    
    CREATE TABLE planets(
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL);
        )`)
        await db.none(`INSERT INTO planets (name) VALUE ('EARTH')`);
        await db.none(`INSERT INTO planets (name) VALUE ('MARS')`);
        await db.none(`INSERT INTO planets (name) VALUE ('JUPITER')`);

        
        
}
setupDb();


const getAll = async (req: Request, res: Response)=>{
    const planets = await db.many(`SELECT * FROM planets;`);
    console.log(planets);
    res.status(200).json(planets)};
 
const getOne = async (req: Request, res: Response)=>{
    const{id} = req.params;
    const planet = await db.one(`SELECT * FROM planets WHERE id=$1;`, Number(id));
    res.status(200).json(planet)
}

const create = (req: Request, res: Response)=>{
    const {id, name} = req.body;
    const newPlanet = {id, name};
   // planets = [...planets, newPlanet];
    res.status(201).json({msg: "The new planet"});
}

const updateById = (req: Request, res: Response)=>{
    const {id} = req.params;
    const {name} = req.body;
   // planets = planets.map(p=> p.id === Number(id)?({...p, name}): p)
    res.status(200).json({msg: "The updated planet"});
}

const deleteById = (req: Request, res: Response)=>{
    const {id} = req.params;
   // planets = planets.filter(p=>p.id!==Number(id));
    res.status(200).json({msg: "Planet deleted"});
}

const createImage = async(req:Request, res:Response)=>{
    console.log(req.file);
    
    res.status(201).json({msg:"Planet image uploaded"})
}

export {getAll, getOne, create, updateById, deleteById, createImage};