export enum JobStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    SUSPENDED = 'Suspended',
    DELETED = 'Deleted'
}

export interface Application {
    id: number;
    jobId: string;
    applicantName: string;
    applicantEmail: string;
    applicantPhone: string;
    applicantImage: string;
    resumeLink: string;
    coverLetterLink: string;
    questions: any;
}

export interface Job {
    id: number;
    title: string;
    category: string;
    industry: string;
    description: string;
    salaryRange: string;
    company: string;
    status: JobStatus;
    postedBy: string;
    postedOn: Date;
}