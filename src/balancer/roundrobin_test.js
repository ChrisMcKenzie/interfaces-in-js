import * as assert from "assert"

import {RoundRobin} from "./roundrobin"

describe('Balancer', function() {
  describe('# RoundRobin', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
