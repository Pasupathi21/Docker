import crypto from 'crypto'

export class DataHash {
    secret_key!: any;
    iv!: any
    // cipher: any
    // decipher: any
    constructor(secret: string) {
        this.secret_key = crypto.createHash('sha256').update(secret).digest()
    }
    encrypt(data: string) {
      this.iv = crypto.randomBytes(16)
      let cipher = crypto.createCipheriv('aes-256-cbc', this.secret_key, this.iv)
     let encrypt= cipher.update(data, 'utf8', 'hex')
      encrypt += cipher.final('hex')
      return `${this.iv.toString('hex')}_${encrypt}`
    }
    decrypt(data: string) {
        let [ivHex, encryptedData]: string[] = data.split('_')
        console.log("decrypt", [ivHex, encryptedData])
        let decipher = crypto.createDecipheriv('aes-256-cbc', this.secret_key, Buffer.from(ivHex, 'hex'))
        let decrypt = decipher.update(encryptedData, 'hex', 'utf8')
        decrypt += decipher.final('utf8')
        return decrypt
    }
    manipulate (data: Record<string, any> | Record<string, any>[], isEncrypt = true): Record<string, any> | any { 
        const loop = (input: Record<string, any> | Record<string, any>[] | string): Record<string, any> | string => {
            // check type
            if (typeof input === 'string') {
                input = isEncrypt ? this.encrypt(input) : this.decrypt(input)
            }else if (Array.isArray(input)){
                for(let i =0; i < input?.length; i++) {
                   input[i] = loop(input[i])
                }
            }else if(typeof input === 'object' && typeof input !== 'function' && !Array.isArray(input)) {
                for (let [key, val] of Object.entries(input)) {
                    input[key] = loop(val)
                }
            }else {
                return input
            }
            return input
        }
        return loop(data)  
            
    }
}