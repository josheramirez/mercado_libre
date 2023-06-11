const request = require('supertest');
const app = require('./app');

// const app = express();

app.get('/user', async(req, res) => {
  res.status(200).json({ name: 'john' });
});




describe("fist test ",() => {
    test('test node', async () =>{    
        const result = await request(app)
        .get('/test')
        // .expect(200)
        
        // expect(result.status).toEqual(200)
        // const resp = await request(app).get("/test").send()
        // console.log(resp);
        expect(result.status).toEqual(200)

    })
})

jest.mock('axios');

describe("fist test ",() => {
  test('test node', async () =>{    

    
      const res = {data:{id:"2020202002"}}
      axios.get.mockResolvedValue(res)
      const resp = await request(app)
        .get("/items/134").send()
        .expect(404)

  })
})

