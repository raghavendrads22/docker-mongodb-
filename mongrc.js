rs.initiate( {
   _id : "rs0",
   members: [
      { _id: 0, host: "mongodb-1" },
      { _id: 1, host: "mongodb-2" },
      { _id: 2, host: "mongodb-3" }
   ]
});

rs.slaveOk();

cfg = rs.conf()
cfg.members[0].priority = 1
cfg.members[1].priority = 1
cfg.members[2].priority = 0

rs.reconfig(cfg)
