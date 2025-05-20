import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

// AWS S3 클라이언트 설정
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'ap-northeast-2',  // 기본값으로 서울 리전 설정
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
})

// S3 버킷 이름
const bucketName = process.env.AWS_BUCKET_NAME || ''

// 이미지 업로드 함수
export async function uploadImageToS3(file: File, path: string): Promise<string> {
  try {
    // 파일 확장자 추출
    const fileExtension = file.name.split('.').pop()
    
    // 고유한 파일 이름 생성 (path + 타임스탬프)
    const key = `${path}/${Date.now()}.${fileExtension}`
    
    // 파일 ArrayBuffer로 변환
    const buffer = await file.arrayBuffer()
    
    // S3에 업로드
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: Buffer.from(buffer),
      ContentType: file.type,
    })
    
    await s3Client.send(command)
    
    // 업로드된 이미지의 URL 반환
    return `https://${bucketName}.s3.amazonaws.com/${key}`
  } catch (error) {
    console.error('Error uploading image to S3:', error)
    throw error
  }
}

// 이미지 URL 생성 함수
export function getImageUrl(key: string): string {
  if (!key) return ''
  
  // 이미 전체 URL이면 그대로 반환
  if (key.startsWith('http')) {
    return key
  }
  
  // 키에서 URL 생성
  return `https://${bucketName}.s3.amazonaws.com/${key}`
}

// 이미지 최적화 (해상도별 URL 반환)
export function getOptimizedImageUrl(key: string, size: 'thumbnail' | 'main' | 'detail' = 'main'): string {
  if (!key) return ''
  
  // 이미 전체 URL이면 파싱하여 키 추출
  if (key.startsWith('http')) {
    const url = new URL(key)
    key = url.pathname.substring(1)  // 슬래시 제거
  }
  
  // 사이즈에 따라 경로 추가
  const sizeFolder = size === 'thumbnail' ? 'thumbs' : size === 'detail' ? 'details' : 'main'
  const path = `${sizeFolder}/${key}`
  
  return `https://${bucketName}.s3.amazonaws.com/${path}`
} 