import { Schema, model, models } from 'mongoose';

import { IFingerprint } from '../interfaces/fingerprint';

const fingerprintSchema: Schema = new Schema(
    {
        ip: String,
        fingerprint: Object
    },
    {
        timestamps: true
    });

fingerprintSchema.index({ ip: 'text', fingerprint: 'text' });

export default models.Fingerprint || model<IFingerprint>('Fingerprint', fingerprintSchema);
