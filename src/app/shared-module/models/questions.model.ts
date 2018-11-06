export class QuestionsModel {
  public quesXrefId: number;
  public subCategoryQuesText: string;
  public options: OptionsModel[];
  constructor() {
    this.quesXrefId = 0;
    this.subCategoryQuesText = "";
    this.options = [];
  }
}
export class OptionsModel {
  public optionId: number;
  public questionCriteriaXRefId: number; 
  public questionCriteriaText: string;
  public description: string;
  public score: number;
  public isSelected: boolean;
  constructor() {
    this.optionId = 0;
    this.questionCriteriaXRefId = 0;
    this.questionCriteriaText = "";
    this.score = 0;
    this.isSelected = false;
  }
}
export class GroupQuestionModel {
  public evalGroupId: number;
  public evalGroupName: string;
  public questions: QuestionsModel[] = [];
  constructor() {
    this.evalGroupId = 0;
    this.evalGroupName = "";    
  }
}
export class ClientResponseModel {
  public userCount: number;
  public developerCount: number;
  public consumerCount: number;
  public clientGroupQuestions: GroupQuestionModel[] = [];
  constructor() {
    this.userCount = 0;
    this.developerCount = 0;
    this.consumerCount = 0;
  }
}
export class SelectedProductModel {
  selectedProductId: number = 0;
  selectedPackageId: number = 0;
  selectedProductVersionId: number = 0;
}

/**
 *Model used to submit SME responses to the API.
 * */
export class SMEInputsModel {
  public questions: GroupQuestionModel[] = [];
  public versionId: number = 0;
  public createdBy: string = "";
}

