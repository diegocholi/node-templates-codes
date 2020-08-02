import { Methods } from './interfaceBase'
class ControllerBase {
  public dao: any
  public getMethod: string
  public listMethod: string
  public insertMethod: string
  public updateMethod: string
  public responsePromisse: any

  constructor({ dao, get, insert, update, list }: Methods) {
    this.dao = new dao()
    this.dao
    this.getMethod = get || ''
    this.listMethod = list || ''
    this.insertMethod = insert || ''
    this.updateMethod = update || ''
  }

  public get(event: any) {
    let execMethod = eval('this.dao.' + this.getMethod)
    let res = event.res

    let params = event.req.params
    let paramKey = Object.keys(params)[0]
    let id = params[paramKey]
    let response = execMethod(paramKey, id)
    this.dao = undefined
    this.returnResponsePromisse(response, res)
  }

  public insert(event: any) {
    let execMethod = eval('this.dao.' + this.insertMethod)
    let res = event.res
    let response = execMethod(event.req)
    this.dao = undefined
    this.returnResponsePromisse(response, res)
  }

  public update(event: any) {
    let execMethod = eval('this.dao.' + this.updateMethod)
    return execMethod(event)
    this.dao = undefined
  }

  public list(event: any) {
    let execMethod = eval('this.dao.' + this.listMethod)
    let res = event.res
    let response = execMethod(event.req)
    this.dao = undefined
    this.returnResponsePromisse(response, res)
  }

  public execMethod(event: any) {
    event
  }

  public returnResponsePromisse(response: any, res: any) {
    response.then((result: any) => {
      // Verificação de insert
      if (result.affectedRows)
        if (result.affectedRows > 0) {
          res.status(200).send([{ statusCode: 200 }, [result]])
          return
        }

      // Verificação de select
      if (result && result.length != 0)
        res.status(200).send([{ statusCode: 200 }, [...result]])
      else
        res.status(404).send({
          statusCode: 404,
          mensage: 'Nada encontrado',
        })
    })
  }
}

export default ControllerBase
