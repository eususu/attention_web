import process from "process"
class Config {

  host:string="localhost:8008"

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