class LLM {

  async inference(query:string):Promise<{rate:string, rate_reason:string}> {
    return {rate:"answer is answer",
      rate_reason: 'reason is reason'
    }
  }

}


const llm = new LLM();
export default llm