import { body, validationResult } from 'express-validator'
import { Router } from 'express'
import { Status } from '@chut/types'

function errorChecker(field: string) {
  return Router().use((req, res, next) => {
    const errors = validationResult(req);
    const r = errors.isEmpty();
    if (!r) {
      res.status(400).send({ status: Status.FieldNotProvided, field });
    }
    else {
      next()
    }
  })
}

function simpleField(field: string) {
  return Router().use(body(field).exists(), errorChecker(field));
}

export const vaildateUsername = simpleField('username')
export const vaildatePassword = simpleField('password')
export const vaildateOldPassword = simpleField('oldPassword')
export const vaildateNewPassword = simpleField('newPassword')
export const vaildateText = simpleField('text')