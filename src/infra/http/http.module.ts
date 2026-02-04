import { Module } from '@nestjs/common'
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller'
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller'
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller'
import { FetchRecentQuestionsController } from '@/infra/http/controllers/fetch-recent-questions.controller'
import { AuthModule } from '@/infra/auth/auth.module'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
})
export class HttpModule {}
