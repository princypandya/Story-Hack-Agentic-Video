# 3CS12D103 - Data Privacy

## Lab 1 (b) - Encrypting/Decrypting Files Using Both Symmetric and Asymmetric Encryption: Handout

**Time: 4 hours**

When we encrypt/decrypt, we have to use a password; however, really long complex passwords are stored in files called keys. The encryption and decryption processes are done using these keys. There are two types of encryption:

### Symmetric Encryption
With this type of encryption, we use a single key. This key is utilized to both encrypt and decrypt data.

### Asymmetric Encryption (Public-Key Cryptography)
In this type of cryptography, we have a pair of keys (also known as a key-pair) that are intrinsically linked to each other. These keys are commonly referred to as the public key and private key. The public key can encrypt files but cannot decrypt them. You might wonder how it is possible for a key to decrypt but not encrypt; the answer lies in the complex mathematics involved. The decryption is actually performed by the private key of the key-pair. It is also possible for the private key to create encrypted files that can only be decrypted by the public key of the key-pair (or by the private key itself).

## Encrypting and Decrypting Data Using Symmetric Encryption

In the following example, we will walk through how to encrypt a file using a symmetric key. A symmetric key can be in the form of a password that you enter when prompted. First, we will create a test file that is going to be encrypted.

### Steps to Encrypt a File Using Symmetric Encryption

1. **Create a Test File**:
- Use a text editor to create a file named `testfile.txt` and write some sample text in it.

2. **Choose a Symmetric Key**:
- Select a strong password that will serve as the symmetric key for encryption.

3. **Encrypt the File**:
- Use a suitable encryption tool or library (e.g., OpenSSL, PyCryptodome) to encrypt the file using the chosen symmetric key.

Example command using OpenSSL:
```bash
openssl enc -aes-256-cbc -salt -in testfile.txt -out testfile.enc -k yourpassword
```

4. **Decrypt the File**:
- To decrypt the file, use the same encryption tool with the symmetric key.

Example command using OpenSSL:
```bash
openssl enc -d -aes-256-cbc -in testfile.enc -out decryptedfile.txt -k yourpassword
```

### Conclusion
This lab provides a foundational understanding of both symmetric and asymmetric encryption methods. By following the steps outlined, you can successfully encrypt and decrypt files using a symmetric key. Further exploration into asymmetric encryption will enhance your understanding of secure communications and data protection.



# Encryption and Decryption Using OpenSSL

In this section, we demonstrate the process of encrypting and decrypting a file using the OpenSSL command-line tool with the AES-256-CBC symmetric encryption algorithm.

## Step 1: Create a File

First, we create a text file named `secrets.txt` containing the string "hello world":

```bash
$ echo 'hello world' > secrets.txt
```

## Step 2: Encrypt the File

Next, we encrypt the file using the AES-256-CBC algorithm. The command used is as follows:

```bash
$ openssl aes-256-cbc -e -in secrets.txt -out secrets.txt.enc
```

During this process, the user is prompted to enter a password for encryption:

```
enter aes-256-cbc encryption password:
Verifying - enter aes-256-cbc encryption password:
```

After successful encryption, we can verify the existence of the encrypted file by listing the files in the directory:

```bash
$ ls -l
```

The output will show the original and encrypted files:

```
total 8
-rw-r--r--.  1 root root 12 Mar  9 17:50 secrets.txt
-rw-r--r--.  1 root root 32 Mar  9 17:50 secrets.txt.enc
```

## Step 3: Decrypt the File

To decrypt the file, we use the same password that was used for encryption. The command for decryption is:

```bash
$ openssl aes-256-cbc -d -in secrets.txt.enc -out secrets.txt.dec
```

The user will again be prompted to enter the decryption password:

```
enter aes-256-cbc decryption password:
```

## Step 4: Verify Decryption

Finally, we can verify the contents of the decrypted file by using the `cat` command:

```bash
$ cat secrets.txt.dec
```

This should display the original content of the file:

```
hello world
```

## Conclusion

In this demonstration, we successfully encrypted and decrypted a file using the AES-256-CBC symmetric encryption algorithm with OpenSSL. This process illustrates the importance of using strong encryption methods to protect sensitive information.



# Encryption and Decryption Using OpenSSL

In this section, we will discuss how to use OpenSSL for symmetric encryption and decryption of files. We will demonstrate the process using a key file for enhanced security.

## Step 1: Create a Key File

First, we need to generate a random key file that will be used for encryption and decryption. This can be done using the following command:

```bash
$ openssl rand 128 > symmetric_keyfile.key
```

After executing this command, you can verify the creation of the key file by listing the files in the directory:

```bash
$ ll
```

The output should show the newly created key file along with any other files in the directory:

```
total 8
-rw-r--r--.  1 root root  12 Mar  9 18:45 secrets.txt
-rw-r--r--.  1 root root  128 Mar  9 18:46 symmetric_keyfile.key
```

## Step 2: Encrypt the File

Next, we will encrypt the `secrets.txt` file using the key file we just created. The command for encryption is as follows:

```bash
$ openssl enc -in secrets.txt -out secrets.txt.enc -e -aes256 -k symmetric_keyfile.key
```

This command specifies the input file (`secrets.txt`), the output file (`secrets.txt.enc`), the encryption mode (`-e`), the encryption algorithm (`-aes256`), and the key file (`-k symmetric_keyfile.key`).

After running the encryption command, you can check the output to confirm that the encrypted file has been created:

```bash
$ ll | grep secrets.txt.enc
```

The output should indicate the presence of the encrypted file:

```
-rw-r--r--.  1 root root  32 Mar  9 18:48 secrets.txt.enc
```

## Step 3: Decrypt the File

To decrypt the encrypted file, you can use the following command:

```bash
$ openssl enc -in secrets.txt.enc -out secrets_decrypted.txt -d -aes256 -k symmetric_keyfile.key
```

In this command, the `-d` flag indicates that we are decrypting the file. The output will be saved to `secrets_decrypted.txt`.

## Conclusion

Using OpenSSL for file encryption and decryption is a straightforward process that enhances the security of sensitive information. By utilizing a key file, we can ensure that our encryption is robust and secure. Always remember to keep your key file safe, as it is essential for decrypting your data.



# Encrypting and Decrypting Data Using Asymmetric Encryption

## Introduction

In the realm of data security, encryption plays a crucial role in protecting sensitive information. This paper discusses the process of encrypting and decrypting data using asymmetric encryption, specifically focusing on the RSA algorithm, which is widely regarded as the industry standard.

## Asymmetric Encryption Overview

Asymmetric encryption utilizes a pair of keys: a public key for encryption and a private key for decryption. This method enhances security by ensuring that the private key is never shared, while the public key can be distributed openly.

## Key Generation

To begin the encryption process, we first need to generate a pair of RSA keys. The following command generates a private key using OpenSSL:

```bash
$ openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

This command specifies the RSA algorithm and sets the key size to 2048 bits. The length of the key is critical; a longer key provides greater security but requires more computational resources for encryption and decryption.

## Encrypting Data

Once the keys are generated, we can encrypt data using the public key. For demonstration purposes, we will encrypt a file named `secrets.txt`:

```bash
$ openssl enc -in secrets.txt -out secrets.txt.enc -e -aes256 -k symmetric_keyfile.key
```

In this command, we use the AES-256 encryption algorithm to encrypt the contents of `secrets.txt`. The output is stored in `secrets.txt.enc`.

## Decrypting Data

To decrypt the previously encrypted file, we use the following command:

```bash
$ openssl enc -in secrets.txt.enc -out secrets.txt.decrypted -d -aes256 -k symmetric_keyfile.key
```

This command decrypts the file `secrets.txt.enc` and outputs the decrypted content to `secrets.txt.decrypted`. The decrypted content can be viewed using:

```bash
$ cat secrets.txt.decrypted
```

The output will display:

```
hello world
```

## Conclusion

Asymmetric encryption, particularly using the RSA algorithm, provides a robust method for securing sensitive data. The balance between key complexity and computational efficiency is essential for effective encryption practices. By following the outlined steps, users can securely encrypt and decrypt their data, ensuring confidentiality and integrity.

In summary, the use of OpenSSL for key generation and data encryption/decryption demonstrates the practical application of cryptographic principles in safeguarding information.



# Title: Generation and Management of Private Keys in Cryptographic Systems

## Abstract
This paper discusses the process of generating and managing private keys in cryptographic systems, focusing on the creation of a private key file and its implications for security. We provide a detailed examination of the private key format, its structure, and the importance of secure key management practices.

## 1. Introduction
In modern cryptographic systems, private keys play a crucial role in ensuring the confidentiality and integrity of data. The generation of a private key is a fundamental step in establishing secure communications. This paper outlines the steps involved in creating a private key file, as well as the best practices for managing these keys securely.

## 2. Key Generation Process
The generation of a private key typically involves the following steps:

1. **Selection of Cryptographic Algorithm**: Choose a suitable cryptographic algorithm (e.g., RSA, ECC).
2. **Key Size Determination**: Decide on the key size based on the required security level.
3. **Key Generation Command**: Execute a command to generate the private key.

### 2.1 Example Command
The following command is used to generate a private key file:

```bash
$ openssl genpkey -algorithm RSA -out private_key.pem
```

## 3. Private Key File Structure
Upon executing the key generation command, a private key file is created. The file can be inspected using the `ll` command:

```bash
$ ll
total 4
-rw-r--r--. 1 root root 1704 Mar  8 13:32 private_key.pem
```

### 3.1 Content of the Private Key File
The content of the private key file follows a specific format, as shown below:

```
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4Du/lM5d8/jym
...
-----END PRIVATE KEY-----
```

This format includes a header and footer that delineate the beginning and end of the key data, with the key itself encoded in Base64.

## 4. Security Considerations
The management of private keys is critical to maintaining the security of cryptographic systems. Key management practices include:

- **Storage Security**: Private keys should be stored in secure locations, such as hardware security modules (HSMs) or encrypted storage.
- **Access Control**: Limit access to private keys to authorized personnel only.
- **Regular Key Rotation**: Implement a policy for regular key rotation to mitigate the risk of key compromise.

## 5. Conclusion
The generation and management of private keys are essential components of secure cryptographic practices. By following the outlined procedures and adhering to best practices, organizations can enhance their security posture and protect sensitive information.

## References
- OpenSSL Documentation
- NIST Special Publication on Cryptographic Key Management

----

This paper provides a comprehensive overview of private key generation and management, emphasizing the importance of security in cryptographic systems.



# Generating Public Key from Private Key

In cryptographic systems, a private key is used to encrypt data, while a public key is used to decrypt it. The relationship between these keys is fundamental to asymmetric encryption. This section outlines the process of generating a public key from a private key using OpenSSL.

## Step 1: Prepare the Private Key

The private key is typically stored in a PEM (Privacy-Enhanced Mail) format. Below is an example of a private key:

```
-----BEGIN PRIVATE KEY-----
4+pdAbo+gDMjXUltX6fSwVHn/e0BegvuZr9tsZm7Z4kLBgleQ6seO8ByPXpRmIU0
McTXOpdC+1QriQ/270b+IQ48zlefFQktdEAB2OnuE2v9/759jQ3CMjDddyUXpw3S
1h3pzSSSBDGAeiUVz3kPsg+mYwKBgQDL9nqxn5JZgBJFBkmZReGBGOQl3WCUUm9G
xZr0hq0AwiPzS0tpPwsnTHMhzC2TfNfEAZXH+X6zGYrxHz9jS5vxN 0p1DuerwD2b
UunASFYNSDMaAMRcdolz3jW5iWa9AlAwqi/szPqJil4LffI59lZbKBFXUjVK1P6h
CjAOV7PVcQKBgCHAdN9VFw20Dc4HipHpf6k9Al/1TQNissKnEhbppbTWVZU8ppeb
LWayZvqJYu1YYXADRPHy2ugV8VQQi42Xo+GqLsVbgO2nZcy3ItEoNTNPFmAoq6GX
dW6PqYXeEo4Wmlcvj44K1TbWHHY7MvrVy6MIFMq8kBrsPZTVLiPL6RtvAoGBALwB
tVMpngN19GE/zHPGYHlZcmQczbuqyPvZhl5EDhCW5ACNtTOMc0GETNQomxJKj7ET
LPeqWUnKD7L3dLyYo2QT7UQ9uvssNx2HrgQaKYgQt1oOvvHkKgtuFuOxbcxn53cU
SRzkTUSfENVTAQbAtRVNt75f/tO9xgC3nVh7Kz9hAoGBANykgv1AWGMrXON18xJX
jTfA1SsIlncg4KJXH+QVpNSdcbuI+duUg+VcTAL98HxR5Daah/iYpgdZZFUP2res
uwfxXc6VetTPaLWc9ZRrXzE+AyaDV4GosD9TZFzM5HB9gIqz9g+K28XUGtR85mA7
b8SkGyGB+PBb7JDZzxs/Kv0e
-----END PRIVATE KEY-----
```

## Step 2: Generate the Public Key

To generate the public key from the private key, the following OpenSSL command is used:

```bash
$ openssl rsa -pubout -in private_key.pem -out public_key.pem
```

### Explanation of the Command:

- `openssl`: This is the command-line tool for using the OpenSSL library.
- `rsa`: This specifies that we are working with RSA keys.
- `-pubout`: This option tells OpenSSL to output a public key.
- `-in private_key.pem`: This specifies the input file containing the private key.
- `-out public_key.pem`: This specifies the output file where the public key will be saved.

## Conclusion

The public key generated can now be used for encryption or for verifying signatures created with the corresponding private key. This process is essential in various applications, including secure communications and data integrity verification.



# Writing RSA Key

Notice that the public key is generated using the private key as its input. This command ended up creating the public key:

```bash
$ ll

total 8
-rw-r--r--.  1  root  root  1704 Mar  8 13:32  private_key.pem
-rw-r--r--.  1  root  root  451  Mar  8 13:34  public_key.pem
```

To view the contents of the public key, we can use the following command:

```bash
$ cat public_key.pem
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuA7v5TOXfP48pg2ibneq
IuX22XK6N7u6u8GtiTW01wbQm2pggHbAXbLN45G0jdLIY0XStV+xln4LL7WziBx4
4dlhFDk9NquGT28DWDJOGbwM0AZq+IFH7yY+osmmAAnY3m484LKkMlT3AArdgIo7
nuzjJrN+MI+tWwqBokUxuYfDbKDUaVOWsqpq1dCxXSvkKANPy5et0WwjB+Lfjg4E
5C9/UJbdg3WclkyI9V1/CeUdVJWNjufvOdXrq4WDwBDwAOpMrIEWyGHxIxqSbble
TVlXQg7Sd4fKaejElsv0OgKv4Lta5cVqa4LbSYv4Lw0W9h7yc6xB9nOqtvr7m pHQ
swIDAQAB
-----END PUBLIC KEY-----
```

Now let’s create some dummy data:

```bash
$ echo 'hello world' > PlainTextFile.txt
```

To verify the contents of the file, we can use:

```bash
$ cat PlainTextFile.txt
hello world
```

This sets the stage for further operations, such as encryption using the generated RSA keys.



# Encrypted Data Handling with OpenSSL

In this section, we will discuss the process of encrypting and decrypting data using OpenSSL, specifically focusing on RSA encryption. We will illustrate the steps involved in creating an encrypted file and subsequently decrypting it.

## 1. Creating an Encrypted File

To create an encrypted version of a plaintext file, we utilize the `openssl` command-line tool. The following command demonstrates how to encrypt a file named `PlainTextFile.txt` using a public key stored in `public_key.pem`:

```bash
$ openssl rsautl -encrypt -inkey public_key.pem -pubin -in PlainTextFile.txt -out EncryptedData.encrypted
```

### 1.1 File Listing

After executing the encryption command, we can list the files in the directory to verify the creation of the encrypted file:

```bash
$ ll
total 16
-rw-r--r--.  1 root root    256 Mar  8 13:46 EncryptedData.encrypted
-rw-r--r--.  1 root root     12 Mar  8 13:42 PlainTextFile.txt
-rw-r--r--.  1 root root   1704 Mar  8 13:32 private_key.pem
-rw-r--r--.  1 root root    451 Mar  8 13:34 public_key.pem
```

As shown in the output, the file `EncryptedData.encrypted` has been successfully created. The size of this file is 256 bytes, indicating that it contains encrypted data.

### 1.2 Content Verification

It is important to note that the content of the encrypted file is not human-readable. Attempting to view the contents using the `cat` command will result in an output of gibberish, as the data is encrypted:

```bash
$ cat EncryptedData.encrypted
```

## 2. Decrypting the Encrypted File

To decrypt the encrypted file, we must use the corresponding private key, which is stored in `private_key.pem`. The following command illustrates how to perform the decryption:

```bash
$ openssl rsautl -decrypt -inkey private_key.pem -in EncryptedData.encrypted -out DecryptedData.txt
```

### 2.1 Resulting File

Upon successful execution of the decryption command, a new file named `DecryptedData.txt` will be created. This file will contain the original plaintext data that was encrypted.

## Conclusion

In summary, we have demonstrated the process of encrypting a plaintext file using RSA encryption with OpenSSL and subsequently decrypting it using the corresponding private key. This method ensures that sensitive data can be securely transmitted and stored, with only authorized parties able to access the original content.



# Encrypting with the Private Key and Decrypting with the Public Key

As mentioned earlier, with a public-private key pair, the role of the public key is to encrypt data so that it can only be decrypted by the private key, and the role of the private key is to only be able to decrypt data that has been encrypted by its public key counterpart. However, due to the nature of asymmetric cryptography, it is possible to do the reverse. That is, the private key can encrypt data that can be decrypted by the key pair’s public key.

## Example Scenario

Let’s say we have both private and public keys from earlier, as well as the sample plaintext data:

```bash
$ ll

total 20

-rw-r--r--.  1  root root    12   Mar     8 13:59  DecryptedData.txt
-rw-r--r--.  1  root root    256  Mar     8 13:46  EncryptedData.encrypted
-rw-r--r--.  1  root root     12  Mar     8 13:42  PlainTextFile.txt
-rw-r--r--.  1  root root    1704 Mar     8 13:32  private_key.pem
-rw-r--r--.  1  root root    451  Mar     8 13:34  public_key.pem
```

### Encrypting Data

To encrypt data using the private key, we can use a command-line tool such as OpenSSL. The following command demonstrates how to encrypt a file using the private key:

```bash
openssl rsautl -sign -in PlainTextFile.txt -out EncryptedData.encrypted -inkey private_key.pem
```

### Decrypting Data

To decrypt the data that was encrypted with the private key, we can use the public key as follows:

```bash
openssl rsautl -verify -in EncryptedData.encrypted -out DecryptedData.txt -inkey public_key.pem -pubin
```

### Result Verification

After executing the decryption command, we can check the contents of the `DecryptedData.txt` file to verify that the data has been successfully decrypted:

```bash
$ cat DecryptedData.txt
hello world
Success!
```

This process illustrates the unique properties of asymmetric cryptography, where the private key can be used to sign (or encrypt) data, and the public key can be used to verify (or decrypt) that data. This method is particularly useful for ensuring data integrity and authenticity in communications.



# Encrypting and Decrypting Data Using RSA Keys

In this section, we will discuss the process of encrypting and decrypting data using RSA keys, specifically focusing on the use of private and public keys. We will illustrate this with a practical example involving a plaintext file.

## File Overview

The following files are present in the current directory:

```
-rw-r--r--.  1  root  root  15   Mar     8 18:27  PlainTextFile.txt
-rw-r--r--.  1  root  root  1704 Mar     8 14:21  private_key.pem
-rw-r--r--.  1  root  root  451  Mar     8 14:29  public_key.pem
```

### Contents of `PlainTextFile.txt`

The content of the plaintext file is as follows:

```
hello world!!!
```

## Encrypting the Plaintext Data

To encrypt the plaintext data using the private key, we execute the following command:

```bash
$ cat PlainTextFile.txt | openssl rsautl -inkey private_key.pem -sign > data_thats_encrypted_with_private_key.encrypted
```

### Output of the Encryption

The output file, `data_thats_encrypted_with_private_key.encrypted`, will contain encrypted data. If we attempt to display this output file using the `cat` command, it will appear as gibberish since the data is encrypted.

## Decrypting the Encrypted Data

To decrypt the encrypted file, we utilize the public key with the following command:

```bash
$ openssl rsautl -inkey public_key.pem -pubin -in data_thats_encrypted_with_private_key.encrypted
```

### Result of the Decryption

Upon executing the decryption command, the output will reveal the original plaintext:

```
hello world!!!
```

## Real-World Application

The ability to encrypt data using the private key is a fundamental aspect of creating a Certificate Signing Request (CSR) file. When a CSR is generated, it is signed with the private key, and this signed request is then sent to a Certificate Authority (CA) for validation and signing. This process ensures the authenticity and integrity of the request, which is crucial in secure communications.

In summary, the use of RSA keys for encryption and decryption is a vital component of modern cryptographic practices, enabling secure data transmission and authentication in various applications.



# Digital Signature Verification in Certificate Signing Requests

In the process of validating a Certificate Signing Request (CSR), a digital signature plays a crucial role. The digital signature is generated by encrypting the hash of the public key with the corresponding private key. This ensures that only the holder of the private key can create a valid signature for the CSR.

## Generating the Digital Signature

To create the digital signature, the following command is executed:

```bash
$ md5sum public_key.pem | openssl rsautl -inkey private_key.pem -sign > checksum.signed
```

In this command:
- `md5sum public_key.pem` computes the hash of the public key.
- `openssl rsautl -inkey private_key.pem -sign` encrypts this hash using the private key, producing a file named `checksum.signed`.

## Validation by the Certificate Authority (CA)

The Certificate Authority (CA) uses the digital signature to verify that the creator of the CSR possesses the corresponding private key. The CA performs the following steps:

1. **Decrypting the Signature**: The CA attempts to decrypt the digital signature using the public key included in the CSR. The command used is:

```bash
$ openssl rsautl -inkey public_key.pem -pubin -in checksum.signed
```

If successful, this operation will yield the original hash of the public key.

2. **Comparing Hashes**: The CA then computes the hash of the public key again to ensure consistency:

```bash
$ md5sum public_key.pem
```

The output of this command should match the decrypted hash from the previous step.

## Example Output

Assuming the public key hash is:

```
f0be71a5a8e3cb907b4b4c2f2fc473b4  public_key.pem
```

If the CA successfully decrypts the signature and obtains the same hash:

```
f0be71a5a8e3cb907b4b4c2f2fc473b4  public_key.pem
```

This match confirms that the creator of the CSR indeed holds the private key, as the public key can only decrypt a signature that was encrypted by its corresponding private key.

## Conclusion

The process of generating and validating a digital signature in the context of a CSR is fundamental to ensuring the authenticity and integrity of the request. By following the outlined steps, the CA can confidently verify the identity of the requester, thereby maintaining the security of the certificate issuance process.