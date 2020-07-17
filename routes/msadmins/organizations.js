const router = require('express').Router();
const msAdminsOrgsCtrl = require('../../controllers/msAdminsController/organizations');
const validMW = require('../../middleware/validation');
const validationRules = require('../../utils/validationRules').msAdmins;

// GET Applications
router.get(
  '/:organizationId/applications',
  validMW(validationRules.organizationsSchema),
  msAdminsOrgsCtrl.getOrganizationsApps
);

//soft delete routes
router.patch(
  '/:organizationId/block',
  validMW(validationRules.organizationsSchema),
  msAdminsOrgsCtrl.blockSingleOrganization
);

module.exports = router;
