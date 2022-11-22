const obj = {"employees":[{"id":1,"name":"ASTRID","schedule":["MO10:00-12:00","TU10:00-12:00","TH01:00-03:00","SA14:00-18:00","SU20:00- 21:00"]},{"id":2,"name":"RENE","schedule":["MO10:00-12:00","TH12:00-14:00","SU20:00-21:00"]},{"id":3,"name":"ANDRES","schedule":["MO10:00-12:00","TH12:00-14:00","SU20:00-21:00"]}]};


const res = obj.employees.reduce((p, c) => {

  c.schedule.forEach(h => {

    if (h in p) {

      p[h].push(c.name); 

    } else {

      p[h] = [c.name];

    }

  });

  return p;

}, {});

for (h in res) {

  if (res[h].length < 2) {
    delete res[h];
  }else{
    res[h] = res[h].join("-")
  }

}

console.log(res);
