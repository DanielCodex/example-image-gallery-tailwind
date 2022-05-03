function getName(fname?: string, lastName?: string):string {
  return `firstname is ${fname} and lastname is ${lastName}`;
}

type getNameFn = typeof getName;

const helloDaniel: getNameFn = function () {
  return "daniel";
}

export default helloDaniel;
