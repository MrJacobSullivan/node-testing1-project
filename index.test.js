const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })

  test('[2] returns a copy, leaving the original object intact', () => {
    const actual = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = utils.trimProperties(actual)
    expect(actual).not.toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toMatchObject(expected)
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    const actual = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = utils.trimPropertiesMutation(actual)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 7 }, { integer: 5 }]
    const expected = 7
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const value = counter.countDown()
    expect(value).toBe(3)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const value = counter.countDown()
    expect(value).toBe(2)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let value = counter.value
    while (value) {
      value = counter.countDown()
    }
    expect(value).toBe(0)

    value = counter.countDown()
    expect(value).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const actual = seasons.next()
    const expected = 'summer'
    expect(actual).toBe(expected)
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const actual = seasons.next()
    const expected = 'fall'
    expect(actual).toBe(expected)
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = 'winter'
    expect(actual).toBe(expected)
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = 'spring'
    expect(actual).toBe(expected)
  })

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = 'summer'
    expect(actual).toBe(expected)
  })

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = 'fall'
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })

  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100)
    expect(focus.odometer).toEqual(100)
  })

  test('[16] driving the car uses gas', () => {
    const expected = focus.tank - 100 / focus.mpg
    focus.drive(100)
    expect(focus.tank).toEqual(expected)

    focus.drive(600)
    expect(focus.tank).toEqual(0)
    expect(focus.odometer).toEqual(600)

    focus.drive(100)
    expect(focus.tank).toEqual(0)
    expect(focus.odometer).toEqual(600)
  })

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    focus.refuel(20)
    focus.drive(200)
    expect(focus.odometer).toEqual(800)
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    const expected = focus.tank
    focus.refuel(200)
    expect(focus.tank).toEqual(expected)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(2)
    expect(result).toBeTruthy()
  })

  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3)
    expect(result).not.toBeTruthy()
  })
})
