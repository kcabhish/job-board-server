import { getJobs } from "./db/jobs.js";

export const resolvers = {
    Query: {
        jobs: () => getJobs(),
    },

    // Resolver function has access to the parent property and 
    // can be passed in as the params
    Job: {
        date: (job) => {
            return toIsoDate(job.createdAt);
        }
    }
};

function toIsoDate(value) {
    return value.slice(0, 'yyyy-mm-dd'.length);
}