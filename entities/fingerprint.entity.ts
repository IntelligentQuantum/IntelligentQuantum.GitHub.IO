import { Schema, model, models } from 'mongoose';

import { IFingerprint } from '../interfaces/fingerprint';

const fingerprintSchema: Schema = new Schema(
    {
        ip: String,
        fingerprint: String,
        createdAt: Date
    },
    {
        timestamps: true
    });

fingerprintSchema.index({ ip: 'text', createdAt: 'text', fingerprint: 'text' });

export default models.Fingerprint || model<IFingerprint>('Fingerprint', fingerprintSchema);
