import {log} from '../utils/log';
import {redacted} from '../utils/redacted';

export default abstract class UseCase<ParamT = void, ResultT = void> {
  async run(params: ParamT): Promise<ResultT> {
    log(
      `UseCase '${this.constructor.name}'를 다음 인자로 실행합니다: ${JSON.stringify(
        redacted(params)
      )}`
    );

    return await this.onExecute(params);
  }

  abstract onExecute(params: ParamT): Promise<ResultT>;
}
