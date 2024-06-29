import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Question } from '../../enterprise/entities/question';
import { QuestionsRepository } from '../repositories/questions-repository';

interface GetQuestionBySlugUseCaseRequest {
    slug: string
}

interface GetQuestionBySlugUseCaseResponse {
    question: Question
}

export class GetQuestionBySlugUseCase {
  constructor(private questionsRespository: QuestionsRepository) {}

  async execute({
    slug
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRespository.findBySlug(slug)

    if (!question) {
        throw new Error('Question not found.')
    }

    return {
        question,
    }
  }
}
