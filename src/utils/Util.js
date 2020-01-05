class Util {
	static readStream(request, limit = 1024 * 1024) {
		return new Promise((resolve, reject) => {
			if (!request.headers['content-length'])
				return reject(new Error(411));

			let data = '';

			request.on('data', d => {
				if (Buffer.byteLength(data) > limit) {
					reject(new Error(413));
					request.connection.abort();
				} else data += d;
			});
			request.once('error', reject);
			request.once('end', () => resolve(data));
		});
	}
}

module.exports = Util;