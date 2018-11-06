export interface EvaluationResult{
    
    matchType:string;
    product:string;
    tool:string;
    provider:string;
    matchScore:string;
    providerVersionId:number;
}

export interface EvaluationResultsProductDetails {

    qDescription:string
    evalGroupName:string
    evalCategoryName:string
    evalSubCategoryName:string
    criteria:string
    criteriaSelected:string
    criteriaScore:string
}
