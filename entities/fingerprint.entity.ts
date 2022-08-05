import { Schema, model } from 'mongoose';

import { IFingerprint } from '../interfaces/fingerprint';

const fingerprintSchema: Schema = new Schema(
    {
        ip:
            {
                type: String,
                unique: true
            },
        fingerprint: Object,
        createdAt: Date
    },
    {
        timestamps: true
    });

fingerprintSchema.index({ ip: 'text', createdAt: 'text', fingerprint: 'text' });

export default model<IFingerprint>('Fingerprint', fingerprintSchema);
