import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Question } from '../../enterprise/entities/question';
import { QuestionsRepository } from '../repositories/questions-repository';

interface FetchRecentQuestionsUseCaseRequest {
    page: number
}

interface FetchRecentQuestionsUseCaseResponse {
    questions: Question[]
}

export class FetchRecentQuestionsUseCase {
  constructor(private questionsRespository: QuestionsRepository) {}

  async execute({
    page
  }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRespository.findManyRecent({ page })


    return {
      questions,
    }
  }
}
