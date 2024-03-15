import { getJob, getJobs } from "./db/jobs.js";
import { getCompanies, getCompany } from './db/companies.js';

export const resolvers = {
    /**
     * In GraphQL, the __root argument typically refers to the root value of the query. It represents the value returned by the parent resolver when resolving the root field of the query.In the context of resolver functions in GraphQL, each resolver receives certain arguments. The first argument is often referred to as the parent value or root value. It contains the result returned by the resolver for the parent field.
     */
    Query: {
        company: (__root, { id }) => getCompany(id),
        companies: () => getCompanies(),
        job: (__root, { id }) => {
            console.log('[Query.job] args', id);
            return getJob(id);
        },
        jobs: () => getJobs(),
    },

    // Resolver function has access to the parent property and 
    // can be passed in as the params
    Job: {
        company: (job) => getCompany(job.companyId),
        date: (job) => {
            return toIsoDate(job.createdAt);
        }
    }
};

function toIsoDate(value) {
    return value.slice(0, 'yyyy-mm-dd'.length);
}