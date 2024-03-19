import { getJob, getJobs, getJobByCompanyId } from "./db/jobs.js";
import { getCompanies, getCompany } from './db/companies.js';

export const resolvers = {
    /**
     * In GraphQL, the __root argument typically refers to the root value of the query. It represents the value returned by the parent resolver when resolving the root field of the query.In the context of resolver functions in GraphQL, each resolver receives certain arguments. The first argument is often referred to as the parent value or root value. It contains the result returned by the resolver for the parent field.
     */
    Query: {
        company:async (__root, { id }) =>{
            console.log("company resolver called");
            console.log('[Query.company] args', id);
            const result = await getCompany(id);
            console.log(result);
            return getCompany(id)
        },
        companies: () => getCompanies(),
        job: (__root, { id }) => {
            console.log('[Query.job] args', id);
            return getJob(id);
        },
        jobs: () => getJobs(),
    },

    Company: {
        // the params passed into the resolver is the parent object
        jobs: (company) => getJobByCompanyId(company.id)
    },

    // Resolver function has access to the parent property and 
    // can be passed in as the params.
    // resolvers can be used to overwrite the property of the root element
    // the commented out description, if uncommented will always resolve the value of the
    // descirption to use the provided value in the resolver
    Job: {
        company: (job) => getCompany(job.companyId),
        date: (job) => {
            return toIsoDate(job.createdAt);
        },
    }
};

function toIsoDate(value) {
    return value.slice(0, 'yyyy-mm-dd'.length);
}