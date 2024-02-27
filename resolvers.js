import { getJobs } from "./db/jobs.js";

export const resolvers = {
    Query: {
        // Resolver for a single query
        // job: () => {
        //     return {
        //         id: 'someID',
        //         title: "Cook",
        //         description: "Cook some awesome food"
        //     } 
        // }

        jobs: () => getJobs(),
    }
};
