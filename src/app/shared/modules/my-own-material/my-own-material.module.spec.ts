import { MyOwnMaterialModule } from './my-own-material.module';

describe('MyOwnMaterialModule', () => {
  let myOwnMaterialModule: MyOwnMaterialModule;

  beforeEach(() => {
    myOwnMaterialModule = new MyOwnMaterialModule();
  });

  it('should create an instance', () => {
    expect(myOwnMaterialModule).toBeTruthy();
  });
});
