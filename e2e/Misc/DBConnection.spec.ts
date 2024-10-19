
import * as sql from 'mssql'
import { test} from '../../fixture/loadModules';
import { config } from '../../playwright.config';

let connection

test.beforeAll(async () => {
  connection = await sql.connect(config);
});

test.afterAll(async () => {
  if (connection) {
    await connection.close();
  }
});


test('Validate SearchBar', async () => {

  try{
    const Projects = await connection.query(`SELECT * FROM Projects where Id = 16`);
    console.log(Projects);
    // const Achievements = await connection.query(`SELECT * FROM Achievements`);
    // console.log(Achievements);
    const Risks = await connection.query(`SELECT * FROM Risks where ProjectId = 16`);
    console.log(Risks);
    // const Challenges = await connection.query(`SELECT * FROM Challenge`);
    // console.log(Challenges);
    const Sprints = await connection.query(`SELECT * FROM Sprints where ProjectId = 16`);
    console.log(Sprints);

  } catch (error) {
    console.error('Error connecting to the database:', error);
  }

});