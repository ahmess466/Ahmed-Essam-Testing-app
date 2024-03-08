import { TexttTranformPipe } from './text-tranform.pipe';

describe('TexttTranformPipe', () => {
  let pipe: TexttTranformPipe;

  beforeEach(() => {
    pipe = new TexttTranformPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms text to UPPERCASE', () => {
    const input = 'hello';
    const transformedText = pipe.transform(input);
    expect(transformedText).toEqual('HELLO In my Testin App');
  });

  it('returns null if value is null', () => {
    const input = null;
    const transformedText = pipe.transform(input);
    expect(transformedText).toBeNull();
  });

  it('returns null if value is undefined', () => {
    const input = undefined;
    const transformedText = pipe.transform(input);
    expect(transformedText).toBeNull();
  });


});
