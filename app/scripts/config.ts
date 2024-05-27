class Config {

  host:string=""

  set_host(host:string) {
    this.host = host
  }

  get_host() {
    return this.host
  }

}



const config = new Config()
export default config