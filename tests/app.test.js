import request from 'supertest';
import app from '../app';

describe('Task Routes', () => {
  it('should add a task and access it by ID', async () => {
    await request(app)
      .post('/tasks/add')
      .send('title=Buy Milk')
      .expect(302);

    const res = await request(app).get('/tasks/1');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Buy Milk');
  });

  it('should return 404 for non-existing task', async () => {
    const res = await request(app).get('/tasks/999');
    expect(res.status).toBe(404);
  });
});
