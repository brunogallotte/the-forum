import { QuestionsRepository } from '../repositories/questions-repository';

interface DeleteQuestionUseCaseRequest {
    authorId: string
    questionId: string
}

interface DeleteQuestionUseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor(private questionsRespository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId

  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRespository.findById(questionId)

    if (!question) {
        throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }
    
    await this.questionsRespository.delete(question)

    return {}
  }
}
