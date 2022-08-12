import { Schema, model, models } from 'mongoose';

import { iFingerprint } from '../interfaces/fingerprint';

const fingerprintSchema: Schema = new Schema(
    {
        ip: String,
        fingerprint: String
    },
    {
        timestamps: true
    });

fingerprintSchema.index({ ip: 'text', fingerprint: 'text' });

export default models.Fingerprint || model<iFingerprint>('Fingerprint', fingerprintSchema);
