describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal("HIJKLMNOPQRSTUVWXYZABCDEFG",cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    });
    it('debería retornar en minúscula "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal("hijklmnopqrstuvwxyzabcdefg",cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'))
    });
    it('debería retornar caracteres "LJBJ#LJBJ" para "CASA@CASA" con offset 35', () => {
      assert.equal("LJBJ#LJBJ",cipher.encode(35, 'CASA@CASA'))
    });
    it('debería retornar con espacios "hijk lmnopq rstuvwxyzabcdefg" para "abcd efghij klmnopqrstuvwxyz" con offset 33', () => {
      assert.equal("hijk lmnopq rstuvwxyzabcdefg",cipher.encode(33, 'abcd efghij klmnopqrstuvwxyz'))
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal("ABCDEFGHIJKLMNOPQRSTUVWXYZ",cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'))
    });
    it('debería retornar en minúscula "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal("abcdefghijklmnopqrstuvwxyz",cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'))
    });
    it('debería retornar caracteres "CASA@CASA" para "LJBJ#LJBJ" con offset 35', () => {
      assert.equal("CASA@CASA",cipher.decode(35, 'LJBJ#LJBJ'))
    });
    it('debería retornar con espacios "abcd efghij klmnopqrstuvwxyz" para "hijk lmnopq rstuvwxyzabcdefg" con offset 33', () => {
      assert.equal("abcd efghij klmnopqrstuvwxyz",cipher.decode(33, 'hijk lmnopq rstuvwxyzabcdefg'))
    });
  });
});
