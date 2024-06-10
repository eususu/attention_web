import process from "process"
class Config {

  host:string=""

  constructor() {
    console.log(`layout init - NEXT_PUBLIC_ATTENTION_HOST=${process.env.NEXT_PUBLIC_ATTENTION_HOST}`)
    this.set_host(process.env.NEXT_PUBLIC_ATTENTION_HOST ?? "localhost:8008")
  }

  set_host(host:string) {
    this.host = host
    console.log(`set host -> ${this.host}`)
  }

  get_host() {
    console.log(`get host -> ${this.host}`)
    return this.host
  }

  is_local() {
    return (process.env['LOCAL_MODE'] == "ON") ? true : false
  }

}

const config = new Config()
export default config