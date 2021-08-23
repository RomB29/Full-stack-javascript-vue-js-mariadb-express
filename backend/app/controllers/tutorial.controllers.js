const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req,res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database

    Tutorial.create(tutorial).then(data => {
        res.send(data);  
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
        });
    });
};   

// Retrieve all Tutorials from the dabase
exports.findAll = (req,res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    // d[Op.and]: [{a: 5}, {b: 6}] // (a = 5) AND (b = 6)
    // [Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
    // [Op.gt]: 6,                // > 6
    // [Op.gte]: 6,               // >= 6
    // [Op.lt]: 10,               // < 10
    // [Op.lte]: 10,              // <= 10
    // [Op.ne]: 20,               // != 20
    // [Op.eq]: 3,                // = 3
    // [Op.is]: null              // IS NULL
    // [Op.not]: true,            // IS NOT TRUE
    // [Op.between]: [6, 10],     // BETWEEN 6 AND 10
    // [Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
    // [Op.in]: [1, 2],           // IN [1, 2]
    // [Op.notIn]: [1, 2],        // NOT IN [1, 2]
    // [Op.like]: '%hat',         // LIKE '%hat'
    // [Op.notLike]: '%hat'       // NOT LIKE '%hat'
    // [Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
    // [Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
    // [Op.startsWith]: 'hat'     // LIKE 'hat%'
    // [Op.endsWith]: 'hat'       // LIKE '%hat'
    // [Op.substring]: 'hat'      // LIKE '%hat%'
    // [Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
    // [Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
    // [Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
    // [Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
    // [Op.like]: { [Op.any]: ['cat', 'hat']}
    //                            // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
    // [Op.overlap]: [1, 2]       // && [1, 2] (PG array overlap operator)
    // [Op.contains]: [1, 2]      // @> [1, 2] (PG array contains operator)
    // [Op.contained]: [1, 2]     // <@ [1, 2] (PG array contained by operator)
    // [Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)
    
    // [Op.col]: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example
    // [Op.gt]: { [Op.all]: literal('SELECT 1') }
    //                           // > ALL (SELECT 1)

    Tutorial.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Tutorial was updated successfully"
                });
            } else {
                res.send({
                    message: "Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id= " + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where: { id: id }
    })
    .then(num => {
    if (num == 1) {
        res.send({
        message: "Tutorial was deleted successfully!"
        });
    } else {
        res.send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
    }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
    });
};  


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all tutorials."
        });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};