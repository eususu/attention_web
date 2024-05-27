class Config {

  host:string=""

  set_host(host:string) {
    this.host = host
    console.log(`set host -> ${this.host}`)
  }

  get_host() {
    console.log(`get host -> ${this.host}`)
    return this.host
  }

}



const config = new Config()
export default config