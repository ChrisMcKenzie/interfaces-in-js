import * as assert from "assert"

import {RoundRobin} from "./roundrobin"

describe('Balancer', function() {
  describe('# RoundRobin', function() {
    it('should fail to instantiate if non-resolver given as first constructor arg', function(done) {
      try {
        new RoundRobin({});
      } catch(e) {
        return done();
      }

      done(new Error("instantiated with invalid resolver"))
    });

    it('should fail to instantiate if now resolver given', function(done) {
      try {
        new RoundRobin();
      } catch(e) {
        return done();
      }

      done(new Error("instantiated with no resolver"))
    });
  });
});
