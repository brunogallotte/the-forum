import { AnswersRepository } from '../repositories/answers-repository';

interface DeleteAnswerUseCaseRequest {
    authorId: string
    answerId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answersRespository: AnswersRepository) {}

  async execute({
    authorId,
    answerId

  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRespository.findById(answerId)

    if (!answer) {
        throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }
    
    await this.answersRespository.delete(answer)

    return {}
  }
}
