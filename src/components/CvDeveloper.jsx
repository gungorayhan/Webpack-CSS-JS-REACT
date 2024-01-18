import { useState } from "react";
const developer={
FullStackDeveloper:"Nodejs(Expressjs),React,AspMVC",
Technologies:"Microservices Architecture, Api Development, Messaging Queues(Kafka End RabbitMq)",
ContainerAndOrchestration:"Docker,Nginx",
DevTools:"Visual Studio Code, Visual Studio",
RDMS:"MSSQL,PostgresSQL,MySQL",
NoSql:"MongoDB",
ORM:"Mongose,TypeORM",
VersionControl:"Git,Github",
Cloud:"AWS"
}


const CvDeveloper = () => {
    const [cv, setCv] = useState({});
  
    return (
      <div>
        <h3>CV</h3>
        <button onClick={() => setCv(developer)}>Ayhan Gungor</button>
  
        <ul>
          {Object.keys(cv).map((key) => (
            <li key={key}>
              {key}: {cv[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CvDeveloper;