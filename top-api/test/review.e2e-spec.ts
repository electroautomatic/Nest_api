import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviwDto } from 'src/review/dto/create-review.dto';
import { disconnect, Types } from 'mongoose';

const priductId = new Types.ObjectId().toHexString();

const testDto: CreateReviwDto = {
  name: 'Test',
	title: 'Test title',
	decription: 'Test description',
	rating: 5,
	priductId
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('review/create (POST)', async () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201)
      .then(({body}: request.Response)=> {
        createdId = body._id;
        expect(createdId).toBeDefined();
        
      });
     
  });

  it('review/create (POST) -- fail', () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send({...testDto, rating: 0})
      .expect(400);      
  });

  afterAll(()=>{
    disconnect();
  });
});
