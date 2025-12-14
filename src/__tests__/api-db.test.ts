import handler from '../../pages/api/db'
import db from '../../db.json'

describe('api/db handler', () => {
    test('responds with db JSON for GET', async () => {
        const json = jest.fn()
        const setHeader = jest.fn()
        const res: any = { json, setHeader }
        const req: any = { method: 'GET' }

        await handler(req, res)

        expect(setHeader).toHaveBeenCalled()
        expect(json).toHaveBeenCalledWith(db)
    })

    test('handles OPTIONS', async () => {
        const status = jest.fn().mockReturnThis()
        const end = jest.fn()
        const res: any = { status, end }
        const req: any = { method: 'OPTIONS' }

        await handler(req, res)

        expect(status).toHaveBeenCalledWith(200)
        expect(end).toHaveBeenCalled()
    })
})
